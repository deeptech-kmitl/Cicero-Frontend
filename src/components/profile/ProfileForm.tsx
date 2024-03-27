"use client";
import React, { useEffect,useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ProfileSchema } from "@/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IUser, SignInResponse, Token } from "@/constants/interface";
import { updateProfile, getProfile } from "@/api-caller/auth";
import { useToast } from "../ui/use-toast";
import { isResponseError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { allMonths } from "@/constants";

type Props = {
  setCookie: (data: SignInResponse) => void;
  userId: string;
  tokenId: string;
};

const ProfileForm = ({ setCookie, userId, tokenId }: Props) => {
  const user: IUser = JSON.parse(userId || "{}");
  const { toast } = useToast();
  const router = useRouter();
  // console.log("User ->", user);
  // console.log("Token ->", tokenId);

  const [buttonText, setButtonText] = useState("EDIT");
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);
  const [first_name, setFname] = useState<string>(user.fname);
  const [last_name, setLname] = useState<string>(user.lname);
  const [phone, setPhone] = useState<string>(user.phone);
  const [email, setEmail] = useState<string>(user.email);
  const [day, setDay] = useState(user?.dob ? user.dob.split("/")[1] : "");
  const [month, setMonth] = useState(user?.dob ? user.dob.split("/")[0] : "");
  const [year, setYear] = useState(user?.dob ? user.dob.split("/")[2] : "");

  const [imageFile, setImageFile] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>(
    user.avatar !== "" ? user.avatar : "/logo.png"
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); // Update the image URL to the selected file's object URL
      // console.log("File ->", file); // Log the file directly
      // console.log("Type of File ->", typeof file); // This will log 'object'
      // console.log("File Type ->", file.type); // Log the MIME type of the file
      // console.log("File Size ->", file.size); // Log the size of the file in bytes
    }
    // console.log("ImageFile->", imageFile);
  };

  useEffect(() => {
    // console.log("ImageFile Index->", imageFile);
  }, [imageFile]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: email,
      firstname: first_name,
      lastname: last_name,
      phone: phone,
      day: day,
      month: month,
      year: year,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    console.log("Form submitted", values);
    const formData = new FormData();

    if (imageFile) {
      console.log("Appending file:", imageFile);
      console.log("Appending file Index:", imageFile[0]);
    } else {
      console.log("No file to append");
    }
    formData.append("avatar", imageFile);
    formData.append("email", values.email);
    formData.append("fname", values.firstname);
    formData.append("lname", values.lastname);
    formData.append("phone", values.phone);
    formData.append(
      "dob",
      new Date(
        Number(values.year),
        Number(values.month) - 1,
        Number(values.day)
      ).toLocaleDateString()
    );

    const data = await updateProfile(user.id, tokenId, formData);
    console.log("Response-Profile:", data, typeof data);
    if (isResponseError(data)) {
      console.log("error");
      const { statusText, message } = data;
      toast({
        title: statusText,
        description: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success !",
        description: "You have successfully updated your profile.",
        variant: "success",
      });
      const token: Token = { id: "", access_token: tokenId };
      const newDataFormat = {
        user: data.user,
        token: token,
      };
      // console.log("NewFormat:", newDataFormat);
      setCookie(newDataFormat);
      router.refresh();
    }
  }

  const toggleEdit = async () => {
    // console.log("isInputDisabled ->", isInputDisabled, buttonText);
    if (buttonText === "EDIT") {
      setButtonText("APPLY");
      setIsInputDisabled(!isInputDisabled);
    }

    const isValid = await form.trigger(); // Trigger validation for all fields
    if (isInputDisabled === true) {
      // console.log("Edit -> Apply");
    } else {
      // console.log("Apply -> Edit \n", form);
      if (isValid) {
        // console.log("Form is valid");
        const values = form.getValues();
        onSubmit(values); // Only call onSubmit if form is valid
        setButtonText("EDIT");
        setIsInputDisabled(!isInputDisabled);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" relative space-y-4 px-2 overflow-x-hidden"
      >
        <div className="w-[100%] h-[40%] flex flex-col justify-center items-center mt-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            disabled={isInputDisabled}
            id="hiddenFileInput"
          />
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Uploaded"
              className="rounded-full w-[15em] h-[15em] mb-5 border-2 border-black"
              width={200}
              height={200}
              onClick={() =>
                document.getElementById("hiddenFileInput")?.click()
              }
            />
          ) : (
            <div
              className="rounded-full bg-gray-400 w-[12em] h-[12em] mb-5"
              onClick={() =>
                document.getElementById("hiddenFileInput")?.click()
              }
            >
              Click to upload image
            </div>
          )}
        </div>

        {/* firstname */}
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your firstname"
                  {...field}
                  disabled={isInputDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* lastname */}
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your lastname"
                  {...field}
                  disabled={isInputDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* birthday */}
        <div className="flex flex-row gap-4 items-center justify-between ">
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Day</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Day"
                    {...field}
                    disabled={isInputDisabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Month</FormLabel>
                <Select
                  disabled={isInputDisabled}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {allMonths.map((month, i) => (
                      <SelectItem key={month} value={String(i + 1)}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Year"
                    {...field}
                    disabled={isInputDisabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  {...field}
                  disabled={isInputDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  disabled={isInputDisabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-3">
          <Button
            type="button"
            onClick={toggleEdit}
            variant="noFillbtn"
            className="my-3"
          >
            {buttonText}
          </Button>

          <Button type="button" variant="blackbtn" className="my-3">
            <Link href={"/signout"}>LOGOUT</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;

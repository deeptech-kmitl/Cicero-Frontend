"use client"
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { CardTitle, CardContent, Card, CardFooter, CardHeader } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { SignInSchema, SignUpSchema } from "@/validator/auth";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'
type Props = {}
const SignInCard = (props: Props) => {
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            cfpassword: "",
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof SignInSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="flex h-full justify-center flex-col items-center p-10">
            <div className="w-[500px] pt-12">
                <Card>
                    <CardHeader>
                        <CardTitle className='center'>Reset your password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center justify-between">
                                                    <Input
                                                        placeholder="Enter your password..."
                                                        {...field}
                                                        type={showPass ? "text" : "password"}
                                                    />
                                                    <span className="ml-2 text-gray-500 text-lg hover:text-black">
                                                        {showPass ? (
                                                            <EyeOff
                                                                onClick={() => setShowPass(!showPass)}
                                                            />
                                                        ) : (
                                                            <Eye
                                                                onClick={() => setShowPass(!showPass)}
                                                            />
                                                        )}
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cfpassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center justify-between">
                                                    <Input
                                                        placeholder="Enter your password..."
                                                        {...field}
                                                        type={
                                                            showConfirm
                                                                ? "text"
                                                                : "password"
                                                        }
                                                    />
                                                    <span className="ml-2 text-gray-500 text-lg hover:text-black">
                                                        {showPass ? (
                                                            <EyeOff
                                                                onClick={() =>
                                                                    setShowConfirm(
                                                                        !showConfirm
                                                                    )
                                                                }
                                                            />
                                                        ) : (
                                                            <Eye
                                                                onClick={() =>
                                                                    setShowConfirm(
                                                                        !showConfirm
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                    </span>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type='submit' variant="blackbtn">Reset Password</Button>
                                <Button className='w-full bg-white border border-black text-black hover:bg-[#EEEEEE]'>Cancel</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default SignInCard
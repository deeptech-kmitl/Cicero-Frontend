"use client"
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { CardTitle, CardContent, Card, CardFooter, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SignInSchema } from '@/validator/auth'
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
  const [showPass, setShowPass] = useState<boolean>(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className='center'>Sign In</CardTitle>
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
            <Button type='submit' variant="blackbtn">Sign In</Button>

          </form>
        </Form>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default SignInCard
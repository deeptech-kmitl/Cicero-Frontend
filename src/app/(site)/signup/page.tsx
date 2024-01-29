import { CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SignInCard from "@/components/auth/SignInCard";
import SignUpCard from "@/components/auth/SignUpCard";
type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="flex h-full justify-center flex-col items-center p-10">
      <Tabs defaultValue="signin" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInCard />
        </TabsContent>
        <TabsContent value="signup">
          <SignUpCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Signup;

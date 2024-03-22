import { IUser } from "@/constants/interface";
import destr from "destr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

function WithAuth<T>(Component: React.ComponentType<T>) {
    const WithAuthComponent = (props: T) => {
        const u_cookie = cookies().get("user")?.value;
        const user = destr<IUser>(u_cookie);
        
        if (!user) {
            return redirect("/");
        }
        return( <>
        <Component {...props!} />
        </>
        )
    };

    WithAuthComponent.displayName = `WithAuth(${Component.displayName || Component.name})`;

    return WithAuthComponent;
}

export default WithAuth;

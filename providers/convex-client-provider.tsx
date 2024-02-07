"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { 
  AuthLoading, 
  Authenticated,
  ConvexReactClient
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { Loading } from "@/components/loading";

import type { PropsWithChildren } from "react"

export const ConvexClientProvider = ({ children }: PropsWithChildren) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);
  
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <Authenticated>
          {children}
        </Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
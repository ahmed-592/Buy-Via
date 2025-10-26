'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { DialogClose } from "@radix-ui/react-dialog"

import React, { useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import forgetPassword from "./_action/forgetPassword"
import { Loader2 } from "lucide-react"
import { schema } from "@/Schema/forgetPassword"
import { useRouter } from "next/navigation"

export default function ForgetPassword() {

    const [loading, setLoading] = useState(false);
    const [forgetPasswordData, setForgetPasswordData] = useState(null);
    const router = useRouter();

    const { handleSubmit, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                email: '',
            },
            resolver: zodResolver(schema)
        }
    );


    async function forgetUserPassword(data: { email: string }) {

        setLoading(true);
        const res = await forgetPassword(data.email);

        setForgetPasswordData(res.message);
        if (res.statusMsg == 'success') {
            router.push("/reset-code");
        }
        setLoading(false);
        

    }
    return <>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="cursor-pointer">Forgotten password?</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(forgetUserPassword)} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Find Your Account</DialogTitle>
                        <DialogDescription>
                            Please enter your email address to search for your account.
                        </DialogDescription>
                    </DialogHeader>

                    <Input
                        {...register("email")}
                        type="email"
                        placeholder="m@example.com"
                        aria-invalid={Boolean(errors.email)}

                        className={`text-black ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="cursor-pointer" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin" /> : "Send Code"}
                        </Button>

                    </DialogFooter>

                    <p className="text-center">{forgetPasswordData}</p>
                </form>
            </DialogContent>
        </Dialog>

    </>
}

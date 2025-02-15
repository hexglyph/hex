"use client"

import { useState, useEffect } from "react"

export type ToastProps = {
    title: string
    description?: string
    variant?: "default" | "destructive"
    duration?: number
}

export const useToast = () => {
    const [toast, setToast] = useState<ToastProps | null>(null)

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null)
            }, toast.duration || 3000)

            return () => clearTimeout(timer)
        }
    }, [toast])

    const showToast = (props: ToastProps) => {
        setToast(props)
    }

    return { toast: showToast }
}


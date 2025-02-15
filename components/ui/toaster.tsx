/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useToast } from "./use-toast"

export const Toaster = () => {
  const { toast } = useToast()

  if (!toast) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`rounded-md bg-white p-4 shadow-md ${toast.variant === "destructive" ? "bg-red-100" : "bg-green-100"}`}
      >
        <h3 className="font-bold">{toast.title}</h3>
        {toast.description && <p>{toast.description}</p>}
      </div>
    </div>
  )
}


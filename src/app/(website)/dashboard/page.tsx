"use client"
import WordForm from "@/app/components/forms/WordForm"
import { Button } from "@/app/components/ui/button"

 function DashboardPage() {

  return (
    <div className="p-4">  
      <div className="flex gap-2 items-center justify-end">
      dashboard
      <Button 
      variant="custom"
      >
        Add word</Button>
      </div>
      <WordForm/>
    </div>
  )
}

export default DashboardPage
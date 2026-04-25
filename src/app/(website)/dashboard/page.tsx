"use client"
import { Button } from "@/app/components/ui/button"

 function DashboardPage() {

  return (
    <div className="p-4">  
      <div className="flex gap-2 items-center justify-end">
      dashboard
      <Button 
      variant="custom"
      >
        Press me</Button>
      </div>
    </div>
  )
}

export default DashboardPage
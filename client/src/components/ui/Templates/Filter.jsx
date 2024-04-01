import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function Filter() {
  return (
    <div>
        <div>
       
        <Input type="email" placeholder="Search" />
      <Button type="submit">Subscribe</Button>
        </div>
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>sort by</SelectLabel>
          <SelectItem value="Popularity">Popularity</SelectItem>
          <SelectItem value="Rating">Rating</SelectItem>
   
        </SelectGroup>
      </SelectContent>
    </Select>
        
    </div>
  )
}

export default Filter
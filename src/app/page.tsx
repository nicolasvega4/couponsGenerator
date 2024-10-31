"use client";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomePageClient() {
  return (
    <div className="mx-auto max-w-2xl items-center space-y-6 p-6">
      <Card className="w-[500px] border-zinc-700 bg-slate-400">
        <CardHeader>
          <CardTitle className="text-zinc-900">Create your coupon</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-zinc-900" htmlFor="email">
                  <strong>Email:</strong>
                </label>
                <Input className="text-zinc-900" id="name" placeholder="example@email.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-gray-900" htmlFor="framework">
                  <strong>Discount:</strong>
                </label>
                <Select>
                  <SelectTrigger id="Select discount">
                    <SelectValue placeholder="Select discount" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="5%">5%</SelectItem>
                    <SelectItem value="10%">10%</SelectItem>
                    <SelectItem value="15%">15%</SelectItem>
                    <SelectItem value="20%">20%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="bg-slate-600" variant="outline">
            Clear
          </Button>
          <Button>Create</Button>
        </CardFooter>
      </Card>

      <Card className="w-[500px] border-zinc-700 bg-slate-600">
        <CardHeader>
          <CardTitle className="text-zinc-900">Coupons generated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p>Email:</p>
              <p>Codigo:</p>
              <p>Descuento:</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

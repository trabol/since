import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { dataCharacters } from "@/app/interfaces/charateres"




export default function CharacterCardInfo({ data }: dataCharacters) {

  const { name, status, species, image } = data;
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{status}</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>{species}</Label>
        <Image
          alt={name}
          src={image}
          width={900}
          height={900}
          className="w-full"
        />
      </CardContent>
      <CardFooter className="flex justify-between">

      </CardFooter>
    </Card>
  );
}



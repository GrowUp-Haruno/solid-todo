import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { localDB } from "@/db/localDB";
import { Component } from "solid-js"

export const DBdelete: Component = () => {
  const handleDBdelete = () => {
    localDB.DeleteDatabase()
  }
  return <PrimaryButton onClick={handleDBdelete}>データベースを削除する</PrimaryButton>;
}

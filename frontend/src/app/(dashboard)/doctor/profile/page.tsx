import ProfilePage from "@/components/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Profile | Lifeline",
  description: "View and manage your doctor profile in Lifeline platform.",
};

export default function Page() {
  return  <ProfilePage userType='doctor'/>
}
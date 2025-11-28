import AuthForm from "@/components/auth/AuthForm";

export const metadata = {
  title: 'Patient Login - Lifeline',
  description: 'Sign in to your Lifeline account to access healthcare consultations.',
};

export default function PatientLoginPage() {
  return  <AuthForm type='login' userRole='patient'/>
}
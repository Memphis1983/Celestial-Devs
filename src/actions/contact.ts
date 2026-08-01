"use server";

export async function submitConsultationAction(formData: {
  name: string;
  email: string;
  company?: string;
  category?: string;
  message: string;
}) {
  // Production server action handler for consultation requests
  console.log("Received consultation submission:", formData);
  return {
    success: true,
    message: "Consultation request recorded successfully.",
  };
}

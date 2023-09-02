import ActionHeader from "@/components/action-header";
import LoginForm from "@/components/login";

export default async function Home() {
  return (
    <>
      <ActionHeader title={"Login"} />
      <LoginForm />
    </>
  );
}

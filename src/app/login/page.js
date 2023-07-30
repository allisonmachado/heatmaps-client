import LoginForm from "@/components/login";

export default async function Home() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row">
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

import { RegisterForm } from "../../components/register-form/RegisterForm";
import { useLoadingAndError } from "../../hooks/useLoadingAndError";
import ErrorMessage from "../../components/error-message/ErrorMessage";
import Loading from "../../components/loading/Loading";

const Register = () => {
  const { isError, isLoading } = useLoadingAndError();

  return (
    <>
      <RegisterForm />
      {isError && <ErrorMessage />}
      {isLoading && <Loading />}
    </>
  );
};
export default Register;

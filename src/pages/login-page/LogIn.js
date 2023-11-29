import { LogInForm } from "../../components/login/LogInForm";
import { useLoadingAndError } from "../../hooks/useLoadingAndError";
import ErrorMessage from "../../components/error-message/ErrorMessage";
import Loading from "../../components/loading/Loading";

const LogIn = () => {
  const { isError, isLoading } = useLoadingAndError();

  return (
    <>
      <LogInForm />
      {isError && <ErrorMessage />}
      {isLoading && <Loading />}
    </>
  );
};
export default LogIn;

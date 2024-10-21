import Container from "../containers/Container"
import CheckedIcon from "../icons/CheckedIcon"

type ConfirmMessageProps = {
  text: string
}

const ConfirmMessage = ({text}: ConfirmMessageProps) => {
  return (
    <Container
    className={
      "bg-total-primary w-11/12 md:w-10/12 mt-4 md:mt-6 flex flex-col py-6 px-5 items-center mb-4 md:mb-0"
    }
  >
    <CheckedIcon colorHex="#000000"/>
      <h2 className="text-total-black font-bold text-base md:text-2xl text-center">{text}</h2>
    </Container>
  )
}

export default ConfirmMessage
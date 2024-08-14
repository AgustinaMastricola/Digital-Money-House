type FooterProps = {
  styleContainer?: string,
  styleParagraph?: string
} 
const Footer = ({styleContainer, styleParagraph}: FooterProps) => {
  return (
    <footer className={`w-full z-10 ${styleContainer}`}>
      <p className={`p-5 text-center text-xs ${styleParagraph}`}>© 2022 Digital Money House</p>
    </footer>
  )
}

export default Footer

const CardInfoHome: React.FC<{title: string, paragraph: string}> = ({title, paragraph}) => {
  return (
    <div className="bg-total-white rounded-3xl px-3 py-4 w-11/12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <hr className="underline my-2 w-72 border-[1.5px] text-total-primary"/>
      <p className="">{paragraph}</p>
    </div>
  )
}
export default CardInfoHome;
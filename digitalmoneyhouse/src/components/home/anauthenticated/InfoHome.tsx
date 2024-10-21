const InfoHome: React.FC<{title: string, paragraph: string}> = ({title, paragraph}) => {
  return (
    <div className="bg-total-white rounded-3xl px-3 py-4 lg:py-5 w-11/12 sm:w-8/12 lg:w-[35%] 2xl:h-8/12 lg:h-[14rem] 2xl:w-3/12">
      <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
      <hr className="underline my-2 w-[95%] border-[1.5px] text-total-primary"/>
      <p className="md:text-xl">{paragraph}</p>
    </div>
  )
}
export default InfoHome;
import FormUpdate from "./FormUpdate"

type DataRowProps = {
  title: string, 
  userInfo: string[],
  atribut: string[],
}
const DataRow = ({title, userInfo, atribut}:DataRowProps) => {
  return (
    <div className="lg:grid lg:grid-cols-4 items-center">
      <div className="w-full lg:col-span-1">
        <span>{title}</span>
      </div>
      <div className="col-span-3">
        <FormUpdate userInfo={userInfo} atribut={atribut}/>
      </div>
    </div>
  )
}
export default DataRow
import clsx from 'clsx';
import Button from '../common/buttons/Button';
import CheckedIcon from '../common/icons/CheckedIcon';

type SuccessMesageProps = {
  style: string;
  textH2: string;
  textP: string;
  buttonText: string;
  buttonHREF: string;
  styleH2: string;
  styleP: string;
}

const SuccessMesage = ({style, textH2, textP, buttonText, buttonHREF, styleH2, styleP }:SuccessMesageProps) => {
  return (
    <div className={`${style} flex flex-col items-center px-5 py-16 space-y-3`}>
      <h2 className={clsx(' text-3xl text-center', styleH2)}>{textH2}</h2>
      <CheckedIcon/>
      <p className={clsx('text-center' , styleP)}>{textP}</p>
      <Button children={buttonText} asLink={true} href={buttonHREF} className='bg-total-primary border-total-primary'/>
    </div>
  )
}

export default SuccessMesage;
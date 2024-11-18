

interface SectionHeadingProps{
    title: string;
    subTitle: string;
}

function SectionHeading({title, subTitle}: SectionHeadingProps) {
  return (
    <div>
      <h2 className='text-[2.625em] font-black text-center'>{title}</h2>
      <p className='text-xl mt-4 text-clip text-gray-500'>{subTitle}</p>
    </div>
  )
}

export default SectionHeading

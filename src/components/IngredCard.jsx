
const IngredCard = ({ name, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5'>
    <div className='flex flex-col ml-4'>
      <img src={img} alt={name} className='w-[108px] h-[108px] rounded-full mb-5' />
      <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
        {name}
      </h4>
      <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
        {title}
      </p>
    </div>
  </div>
);

export default IngredCard;

export default function ({ImageUrl, ImageName}) {
  return (
    <div className="relative w-full sm:w-[16rem] h-[16rem] group mx-auto">
      {/* Image */}
      <img
        src={ImageUrl}
        alt="Image Name"
        className="w-full h-full object-cover opacity-70 rounded-2xl group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 text-white shadow text-lg font-bold group-hover:opacity-0 transition-opacity duration-300">
        {ImageName}
      </div>
    </div>
  );
}

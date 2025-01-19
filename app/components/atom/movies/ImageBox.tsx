interface ImageBoxProps {
  image: string
}

export default function ImageBox({ image }: ImageBoxProps) {
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

interface ImageCardProps {
  open: (url: string) => void;
  descr: string;
  url: string;
  large: string;
}

export default function ImageCard({ open, descr, url, large }: ImageCardProps) {
  return (
    <div
      id="imageCard"
      onClick={() => {
        open(large);
      }}
    >
      <img src={url} alt={descr} height={220} width={343} />
    </div>
  );
}

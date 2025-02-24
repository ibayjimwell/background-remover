import DownloadButton from "./DownloadButton"

function Index({imageSrc}: {imageSrc?: string}) {

    const handleDownloadClick = () => {
        if (imageSrc) {
            const link = document.createElement('a');
            link.download = `${imageSrc.split('/').pop()?.split('?')[0]}.png`;
            link.href = imageSrc;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

  return (
    <>
        <figure className="max-w-lg">
            <img className="h-auto max-w-full rounded-lg" src={imageSrc} alt="image" />
        </figure>
        <DownloadButton onClick={handleDownloadClick} />
    </>
  )
}

export default Index

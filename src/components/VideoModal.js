import  ReactDOM  from "react-dom" 

function Video({ url, handleClose }) {
  let urlRoute = url.replace("watch?v=", "embed/");
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-close-button" onClick={handleClose}>
            <img src="https://www.citypng.com/public/uploads/small/31631915371lyniu2zkjrlmbmhkqxc9kvtfx68cnz2xlt2rjuj76epxi2rwewm7g83rnuzcvyqnedbb3dxjrxiqtvtbdegg7gqjqanaebkz3zb4.png" alt="close" className="w-4 h-4" />
          </button>
        </div>
        <iframe width="560" height="315" src={urlRoute} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default function VideoModal({url, handleClose}) {
  return ReactDOM.createPortal(
    <Video url={url} handleClose={handleClose} />,
    document.getElementById("modal-root")
  )
}
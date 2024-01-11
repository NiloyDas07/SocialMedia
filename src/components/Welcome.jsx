export default function Welcome({ handleConnectClick }) {
  return (
    <div className="welcome-msg">
      You have not connected to the server yet.
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleConnectClick}
      >
        Connect to the server
      </button>
    </div>
  );
}

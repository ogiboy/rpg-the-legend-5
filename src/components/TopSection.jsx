export default function TopSection({ submitted }) {
  return (
    <div className="top-section">
      <h1 className={submitted ? 'second-fade-in' : null}>
        {!submitted ? 'The Legend' : 'Bir kahraman doğdu. Kahramanın adı: '}
      </h1>
      <div className="image-container">
        <img
          className={!submitted ? null : 'fade-out-and-in'}
          src={!submitted ? '/character1.png' : '/character2.png'}
        />
      </div>
    </div>
  )
}

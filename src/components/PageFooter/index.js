import React from 'react'
import './styles.css'

function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="footer-content container">
        <p>
          &copy; 2020 <strong>NoteApp</strong>. All Rights Reserved
        </p>
        <div className="credits">
          <p>
            Designed by stories / <a href="http://www.freepik.com">Freepik</a>{' '}
            and <a href="https://dribbble.com/"> Dribble</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter

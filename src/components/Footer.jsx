import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h4>Made by Hamza Shaikh</h4>
      <div className='links'>
        <a
          href='https://github.com/shaikhhamza11'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='icons' />
        </a>
        <a
          href='https://www.linkedin.com/in/shaikhhamza11'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub className='icons' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as LinkedIn,
  FaAngellist as AngelList,
  FaFacebookF as Facebook,
  FaRedditAlien as Reddit,
  FaSpotify as Spotify,
  FaMediumM as Medium,
  FaKeybase as Keybase,
} from 'react-icons/fa'
import Appbar from './Appbar'

export default function Info() {
  return (
    <div>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4'>
        <div className='my-12'></div>
        <div className='text-6xl font-bold text-brand'>
          <span className='text-gray-900 dark:text-white'>Hello, I'm</span>{' '}
          <br />
          Gene Smith.
        </div>
        <div className='text-4xl code mt-8 mb-6'>async {'{'}</div>
        <div className='text-gray-600 dark:text-gray-400 mx-12 my-8 text-2xl info'>
          Seasoned marketing executive, experienced marketing technologist and a
          machine learning & red wine enthusiast. Howard U. Follow me. Contact
          me. Etc....
        </div>
        <div className='text-4xl code mt-4 mb-6'>{'}'}</div>
        <div className='text-4xl mt-12'>
          <a
            className='mr-12 icon'
            href='https://www.linkedin.com/in/genesmith1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedIn />
          </a>
          <a
            className='mr-12 icon'
            href='https://angel.co/gene-smith?public_profile=1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AngelList />
          </a>
          <a
            className='mr-12 icon'
            href='https://keybase.io/genesmith'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Keybase />
          </a>
          <a
            className='mr-12 icon'
            href='https://www.facebook.com/gene.r.smith'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Facebook />
          </a>
          <a
            className='mr-12 icon'
            href='https://github.com/gene-smith'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github />
          </a>
          <a
            className='mr-12 icon'
            href='https://www.reddit.com/user/gene-smith/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Reddit />
          </a>
          <a
            className='mr-12 icon'
            href='https://twitter.com/gene_r_smith'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>
          <a
            className='mr-12 icon'
            href='https://medium.com/@gene_r_smith'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Medium />
          </a>
          <a
            className='mr-12 icon'
            href='https://open.spotify.com/user/genesmith?si=xDf3RF02RFCHuXH5FZB82w'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Spotify />
          </a>
        </div>
      </div>
    </div>
  )
}

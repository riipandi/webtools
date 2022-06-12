import { IconCopy } from '@tabler/icons'
import clipboard from 'clipboardy'
import Highlight, { defaultProps, Language, Prism } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
import React, { FC } from 'react'
import { toast } from 'react-hot-toast'

// Load more Prism language definitions
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-php')

type Props = {
  content: any
  language?: Language
}

// TODO: add line highlighting:
// https://prince.dev/highlight-with-react
// https://www.tiagofsanchez.com/blog/2020-08-06-code-line-highlight-with-prism-react-renderer
const RenderCode: FC<Props> = ({ content, language }) => {
  const handleCopy = async () => {
    await clipboard.write(content)
    toast.success('Code copied to clipboard')
  }

  return (
    <Highlight {...defaultProps} Prism={Prism} theme={theme} code={content.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className='w-full p-0 mx-0 my-2 overflow-hidden text-left bg-gray-900 rounded-lg'>
          <div className='relative z-50 flex items-center justify-between w-full px-4 py-3 border-b opacity-75'>
            <span className='font-medium text-gray-100'>Syntax: {language || 'plain'}</span>
            <button className='cursor-pointer group' onClick={handleCopy}>
              <IconCopy className='w-6 h-6 text-white group-hover:text-blue-400' />
            </button>
          </div>
          <div className='p-4 overflow-auto'>
            {tokens.map((line, i) => (
              <div className='table-row' key={i} {...getLineProps({ line, key: i })}>
                <span className='table-cell pr-2.5 text-right opacity-50 select-none text-sm'>{i + 1}</span>
                <span className='table-cell px-2 py-0.5 text-sm'>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  )
}

export default RenderCode

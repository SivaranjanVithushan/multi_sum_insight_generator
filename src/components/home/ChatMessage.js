import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import moment from 'moment';
import person from '../../assets/user_profile.jpeg';
import logo from '../../assets/chatLogo.png';

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const ChatMessage = (props) => {
  const { id, createdAt, text, ai = false, img = false } = props.message;

  // Extract image src if the img property is true
  const extractImageSrc = (text) => {
    const regex = /!\[Generated Image\]\((.*?)\)/;
    const match = regex.exec(text);
    return match ? match[1] : '';
  };

  const imageSrc = img ? extractImageSrc(text) : '';

  return (
    <div key={id} className={`${ai && 'bg-sky-100'} flex-row-reverse message px-10`}>
      <div className="message__wrapper">

        {img && imageSrc ? (
          <img src={imageSrc} className="generated-image" alt="Generated content" />
        ) : (
          <ReactMarkdown
            className={'message__markdown text-left'}
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || 'language-js');
                return !inline && match ? (
                  <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}{' '}
                  </code>
                );
              }
            }}
          >
            {text}
          </ReactMarkdown>
        )}
        <div className="text-left text-slate-600 text-xs message__createdAt">
          {moment(createdAt).calendar()}
        </div>
      </div>
      <div className="message__pic">
        <div className="avatar">
          <div className="border rounded-full">
            {ai ? (
              <img width="30" className="border rounded-full" src={logo} alt="Logo" />
            ) : (
              <img className="border rounded-full" src={person} alt="profile pic" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

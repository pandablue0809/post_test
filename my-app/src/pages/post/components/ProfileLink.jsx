import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCircleCheck } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function ProfileLink() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      let timeout;
      if (copied) {
          timeout = setTimeout(() => setCopied(false), 1500);
      }
      return () => clearTimeout(timeout);
  }, [copied]);

    return (
      <div className="w-full h-[100px] bg-white shadow-lg flex flex-row items-center">
          <div className="w-[100px] h-[100px] flex flex-row justify-center items-center bg-[radial-gradient(84.9%_100%_at_50%_0%,#8F00FF_0%,#532BC5_100%)]">
              <FaCircleCheck className="w-[40px] h-[40px] text-white"/>
          </div>
          <div className="px-8 py-6">
            <div className="mb-2.5 text-textColor">
              link to your profile
            </div>
            <div className="flex gap-2.5 items-center">
                <span className="text-base text-titleColor font-bold">https://twitter.com/p/12345</span>
                <CopyToClipboard text="https://twitter.com/p/12345" onCopy={() => setCopied(true)}>
                  <div className="flex items-center cursor-pointer">
                      <MdContentCopy className="w-[24px] h-[24px] text-textColor"/>
                      {copied && <span className="ml-2 text-primaryColor">Copied!</span>}
                  </div>
                </CopyToClipboard>
            </div>          
          </div>          
     </div>
    );
}

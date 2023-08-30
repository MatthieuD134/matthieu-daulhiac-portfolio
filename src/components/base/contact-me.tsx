import useOnClickOutside from '@/hooks/use-on-click-outside';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '@/constants/env';
import Button from './button/button';
import { toast } from 'react-toastify';
import WeChatLogo from '../icons/wechat-logo';
import LinkedInLogo from '../icons/linkedin-logo';
import GithubLogo from '../icons/github-logo';
import { GITHUB_LINK, LINKEDIN_LINK, WECHAT_ACCOUNT } from '@/constants/links';

const CONTENT = [
  {
    locale: 'en',
    title: 'Contact Me',
    nameInput: { placeholder: 'Name' },
    emailInput: { placeholder: 'Email' },
    messageInput: { placeholder: 'Message...' },
    buttonLabel: 'Send',
    buttonProcessingLabel: 'Sending...',
    successMessage: 'Message sent!',
    errorMessages: {
      name: 'Please enter your name',
      email: 'Please enter a valid email',
      message: {
        required: 'Please enter a message',
        min: 'Message must be at least 10 characters',
        max: 'Message must be less than 1000 characters',
      },
    },
    or: 'Or',
    socialsLabel: 'Find me on my socials',
    wechatId: 'WeChat ID:',
  },
  {
    locale: 'fr',
    title: 'Contactez-moi',
    nameInput: { placeholder: 'Nom' },
    emailInput: { placeholder: 'Email' },
    messageInput: { placeholder: 'Message...' },
    buttonLabel: 'Envoyer',
    buttonProcessingLabel: 'Envoi en cours...',
    successMessage: 'Message envoyé!',
    errorMessages: {
      name: 'Veuillez entrer votre nom',
      email: 'Veuillez entrer un email valide',
      message: {
        required: 'Veuillez entrer un message',
        min: 'Le message doit comporter au moins 10 caractères',
        max: 'Le message doit comporter moins de 1000 caractères',
      },
    },
    or: 'Ou',
    socialsLabel: 'Retrouvez-moi sur mes réseaux sociaux',
    wechatId: 'ID WeChat:',
  },
  {
    locale: 'cn',
    title: '联系我',
    nameInput: { placeholder: '姓名' },
    emailInput: { placeholder: '电子邮件' },
    messageInput: { placeholder: '信息...' },
    buttonLabel: '发送',
    buttonProcessingLabel: '发送中...',
    successMessage: '信息已发送！',
    errorMessages: {
      name: '请输入您的姓名',
      email: '请输入有效的电子邮件',
      message: {
        required: '请输入信息',
        min: '信息必须至少包含10个字符',
        max: '信息必须少于1000个字符',
      },
    },
    or: '更多方式',
    socialsLabel: '在我的社交媒体上找到我',
    wechatId: '微信号：',
  },
];

export default function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useRouter();
  const ref = useRef<HTMLDivElement>(null); // reference to the dropdown
  const formRef = useRef<HTMLFormElement>(null); // reference to the form
  const [isProcessing, setIsProcessing] = useState(false);

  // get the content for the current locale
  const content = useMemo(
    () => CONTENT.find((content) => content.locale === locale) || CONTENT[0],
    [locale]
  );

  const formSchema = yup.object().shape({
    name: yup.string().required(content.errorMessages.name),
    email: yup
      .string()
      .email(content.errorMessages.email)
      .required(content.errorMessages.email),
    message: yup
      .string()
      .min(10, content.errorMessages.message.min)
      .max(1000, content.errorMessages.message.max)
      .required(content.errorMessages.message.required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onBlur',
  });

  // close the dropdown when clicking outside of it
  useOnClickOutside(ref, () => isOpen && setIsOpen(false));

  const onSubmit = handleSubmit(() => {
    if (!formRef.current) {
      return;
    }
    setIsProcessing(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        reset();
        toast.success(content.successMessage);
        setIsProcessing(false);
      },
      (error) => {
        console.error(error);
        setIsProcessing(false);
      }
    );
  });

  useEffect(() => {
    // reset the form when the locale changes
    reset();
  }, [locale, reset]);

  return (
    <>
      {isOpen && (
        // when the dropdown is open, add a backdrop blur to prevent clicking on the rest of the page
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg z-40" />
      )}
      <div className="fixed bottom-0 w-full z-50">
        <div
          ref={ref}
          className="mx-auto bg-bg-gradient-start dark:bg-dark-bg z-50 w-full max-w-4xl drop-shadow-2xl border-solid border-t-2 border-b-0 tall:border-l-2 tall:border-r-2 border-secondary dark:border-primary"
        >
          <div className="h-16 flex justify-center items-center w-full">
            <button
              className="h-full w-full"
              onClick={() => setIsOpen((state) => !state)}
            >
              <span className="h-fit text-xl font-medium">
                {content?.title}
              </span>
            </button>
          </div>
          <div
            className={`grid ${
              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            } transition-all duration-200 eas-in-out`}
          >
            <div className="overflow-hidden max-h-[66vh]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                ref={formRef}
              >
                <div className="px-4 pt-8 mx-auto max-w-xl flex flex-col gap-4">
                  <div className="w-full">
                    <input
                      tabIndex={isOpen ? 0 : -1}
                      {...register('name')}
                      {...content.nameInput}
                      className="bg-transparent w-full rounded-none border-b-2 outline-none border-blackAlpha-500 focus:border-blackAlpha-900 hover:border-blackAlpha-900 dark:border-whiteAlpha-500 dark:hover:border-whiteAlpha-900 dark:focus:border-whiteAlpha-900 transition-colors duration-200 ease-in-out placeholder-blackAlpha-500 dark:placeholder-whiteAlpha-500"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      tabIndex={isOpen ? 0 : -1}
                      {...register('email')}
                      {...content.emailInput}
                      className="bg-transparent w-full rounded-none border-b-2 outline-none border-blackAlpha-500 focus:border-blackAlpha-900 hover:border-blackAlpha-900 dark:border-whiteAlpha-500 dark:hover:border-whiteAlpha-900 dark:focus:border-whiteAlpha-900 transition-colors duration-200 ease-in-out placeholder-blackAlpha-500 dark:placeholder-whiteAlpha-500"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <textarea
                      tabIndex={isOpen ? 0 : -1}
                      {...register('message')}
                      {...content.messageInput}
                      rows={5}
                      className="bg-transparent w-full resize-none rounded-none border-b-2 outline-none border-blackAlpha-500 focus:border-blackAlpha-900 hover:border-blackAlpha-900 dark:border-whiteAlpha-500 dark:hover:border-whiteAlpha-900 dark:focus:border-whiteAlpha-900 transition-colors duration-200 ease-in-out placeholder-blackAlpha-500 dark:placeholder-whiteAlpha-500"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <Button
                    tabIndex={isOpen ? 0 : -1}
                    type="submit"
                    className="mx-auto"
                    disabled={isProcessing}
                  >
                    {isProcessing
                      ? content.buttonProcessingLabel
                      : content.buttonLabel}
                  </Button>
                </div>
              </form>
              <div className="w-full max-w-xl mx-auto flex flex-col pt-4 pb-8">
                <div className="flex justify-center items-center gap-4 opacity-70">
                  <div className="w-4/12 h-px bg-black dark:bg-white" />
                  <div>{content.or}</div>
                  <div className="w-4/12 h-px bg-black dark:bg-white" />
                </div>
                <span className="text-center mt-4">{content.socialsLabel}</span>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    className="group relative flex justify-center items-center"
                    aria-label="show wechat account button"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <WeChatLogo className="fill-black dark:fill-white" />
                    <span
                      className={`group/tooltip pointer-events-none absolute -top-20 -left-12 w-max opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 bg-bg-gradient-start dark:bg-dark-bg p-4 border border-black dark:border-white`}
                    >
                      <p className="opacity-70 text-xs text-left">
                        {content.wechatId}
                      </p>
                      <p className="text-sm">{WECHAT_ACCOUNT}</p>
                    </span>
                  </button>
                  <a
                    href={LINKEDIN_LINK}
                    aria-label="LinkedIn link"
                    target="blank"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <LinkedInLogo className="fill-black dark:fill-white" />
                  </a>
                  <a
                    href={GITHUB_LINK}
                    aria-label="github link"
                    target="blank"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <GithubLogo className="fill-black dark:fill-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

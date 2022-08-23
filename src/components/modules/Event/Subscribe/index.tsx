import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateSubscriberMutation } from 'graphql/event/generated/graphql'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, toast } from 'react-toastify'
import * as zod from 'zod'

import DefaultLayout from 'components/communs/layouts/DefaultLayout'

import { CalendarCheck } from 'styles/icons'

import { withHyGraphApollo } from 'lib/withHyGraphApollo'
import {
  Button,
  Container,
  Content,
  Description,
  ErrorBox,
  Footer,
  Form,
  FormContainer,
  Input,
} from './styles'

const newSubscriberFormValidationSchema = zod.object({
  name: zod.string().min(1, '* Informe seu nome!').max(150),
  email: zod.string().email('* Informe um e-mail válido!'),
})

type INewSubscriberFormData = zod.infer<
  typeof newSubscriberFormValidationSchema
>

function Subscribe() {
  const router = useRouter()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const newSubscriberForm = useForm<INewSubscriberFormData>({
    resolver: zodResolver(newSubscriberFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = newSubscriberForm

  const handleCreateNewSubscriber = useCallback(
    async (dataForm: INewSubscriberFormData) => {
      try {
        const { data } = await createSubscriber({
          variables: {
            name: dataForm.name,
            email: dataForm.email,
          },
        })

        reset()

        if (data?.createSubscriber?.id) {
          router.push('/event/lesson/event')
        }
      } catch {
        toast.error('Email já cadastrado!', {
          transition: Bounce,
        })
      }
    },
    [createSubscriber, reset, router],
  )

  return (
    <DefaultLayout
      title="EventNotion"
      description="Your next generation Event"
      logoFileName="event-logo.svg"
      headerTitle="Event"
      headerColor="green"
      headerLogo="event"
      headerLogoAlt="Logo EventNotion"
    >
      <Container>
        <Content>
          <Description>
            {/* <Logo /> */}

            <h1>
              Gameplay de <strong>Horizon Forbidden West</strong>, do zero até
              fechar, no <strong>&nbsp;PS5</strong>
            </h1>
            <p>
              Agora você pode acompanhar o melhor conteúdo do ínicio ao fim do
              game, ver a incrível missão de Aloy para salvar a Terra, conhecer
              e derrotar todos os &quot;boss&quot;.
            </p>
          </Description>

          <FormContainer>
            <strong>Inscreva-se gratuitamente</strong>

            <Form onSubmit={handleSubmit(handleCreateNewSubscriber)}>
              <Input
                type="text"
                placeholder="Seu nome completo"
                error={!!errors.name}
                disabled={!!loading}
                {...register('name')}
              />

              <ErrorBox error={!!errors.name}>
                {errors.name && <span>{errors.name.message}</span>}
              </ErrorBox>

              <Input
                type="email"
                placeholder="Digite seu email"
                error={!!errors.email}
                disabled={!!loading}
                {...register('email')}
              />

              <ErrorBox error={!!errors.email}>
                {errors.email && <span>{errors.email.message}</span>}
              </ErrorBox>

              <Button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Garantir minha vaga'}
              </Button>
            </Form>
          </FormContainer>
        </Content>

        <Footer>
          <div>
            <CalendarCheck size={24} />
            <a href="#">EventNotion - Todos os direitos reservados</a>
          </div>
          <div>
            <a href="#">Políticas de privacidade</a>
          </div>
        </Footer>
      </Container>
    </DefaultLayout>
  )
}

export default withHyGraphApollo(Subscribe)

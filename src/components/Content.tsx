export const Section = () => {
  return (
    <section>
      <h1>React + Vite + TypeScript</h1>
      <p>
        Это учебный проект на React, созданный для практики работы с
        компонентами и Git.
      </p>
      <p>Дополнительная информация о проекте...</p>
    </section>
  )
}

type MainContentProps = {
  children: React.ReactNode
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="main-content">{children}</main>
}

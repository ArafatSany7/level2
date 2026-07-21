
const AuthorsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      BlogLayout are special only for blogs or nested routes indside the blog directory
      {children}
    </div>
  )
}

export default AuthorsLayout

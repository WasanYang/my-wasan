export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-8 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
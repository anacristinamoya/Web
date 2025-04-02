export function Footer() {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container">
        <div className="flex justify-center items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01584017ec777a342250fa61a3346a7681bcdb2e?placeholderIfAbsent=true"
              alt="Copyright"
              className="w-4 h-4"
            />
            <div>
              <span>2023 | </span>
              <a
                href="https://www.figma.com/@shahsagarm"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designed
              </a>
              <span> and </span>
              <a
                href="https://github.com/shahsagarm/sagarshah.dev"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                coded
              </a>
              <span> with </span>
              <span className="text-red-500">❤</span>
              <span>️️ by Sagar Shah</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

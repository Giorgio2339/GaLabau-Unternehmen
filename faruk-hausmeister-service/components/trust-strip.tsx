export function TrustStrip() {
  return (
    <div className="bg-[#3E5C46] py-4">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {/* Stars + Rating */}
        <div className="flex items-center gap-3">
          <span className="flex gap-0.5" aria-label="5 von 5 Sternen">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#B08D57" aria-hidden="true">
                <path d="M8 1.5L9.545 5.73L14 6.163L10.818 9.145L11.764 13.5L8 11.255L4.236 13.5L5.182 9.145L2 6.163L6.455 5.73L8 1.5Z"/>
              </svg>
            ))}
          </span>
          <span className="font-sans text-[#F2EFE6] text-[0.875rem] font-medium">
            5,0 aus 15 Google-Bewertungen
          </span>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-5 bg-white/20" aria-hidden="true" />

        {/* Availability chip */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B08D57]" aria-hidden="true" />
          <span className="font-sans text-[#F2EFE6] text-[0.875rem] font-medium">
            Oft schon am nächsten Tag verfügbar
          </span>
        </div>
      </div>
    </div>
  )
}

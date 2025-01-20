/**
 * Componente que ilustra o método de leitura RSVP (Rapid Serial Visual Presentation).
 * Mostra, de forma simplificada, como as palavras aparecem sequencialmente em um
 * mesmo ponto, reduzindo a movimentação dos olhos.
 */
const RsvpIllustration = () => {
  return (
    <svg
      width="600"
      height="300"
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mt-8"
    >
      
      <title>Ilustração do Método RSVP</title>

      <rect
        x="0"
        y="0"
        width="600"
        height="300"
        fill="#F8FAFC"
        rx="8"
        ry="8"
      />

      <text
        x="50%"
        y="50"
        textAnchor="middle"
        fill="#0F172A"
        fontSize="20"
        fontWeight="bold"
      >
        Método de Leitura RSVP
      </text>

      <rect
        x="80"
        y="110"
        width="120"
        height="50"
        fill="#2DD4BF"
        rx="8"
        ry="8"
      />
      <text
        x="140"
        y="140"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="16"
        fontWeight="bold"
      >
        Palavra 1
      </text>

      <path
        d="M200,135 L240,135"
        stroke="#0F172A"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      <rect
        x="240"
        y="110"
        width="120"
        height="50"
        fill="#A78BFA"
        rx="8"
        ry="8"
      />
      <text
        x="300"
        y="140"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="16"
        fontWeight="bold"
      >
        Palavra 2
      </text>

      <path
        d="M360,135 L400,135"
        stroke="#0F172A"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      <rect
        x="400"
        y="110"
        width="120"
        height="50"
        fill="#F472B6"
        rx="8"
        ry="8"
      />
      <text
        x="460"
        y="140"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="16"
        fontWeight="bold"
      >
        Palavra 3
      </text>

      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L0,6 L6,3 z"
            fill="#0F172A"
          />
        </marker>
      </defs>
    </svg>
  );
};

export default RsvpIllustration;

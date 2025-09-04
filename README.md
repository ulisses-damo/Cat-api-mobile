# Gerador de Gatos - Trabalho Ulisses Damo

Uma aplicação React Native/Expo que gera imagens aleatórias de gatos usando a API TheCatAPI.

## 🎯 Funcionalidades

- 🐱 Geração aleatória de imagens de gatos
- 📱 Interface responsiva e moderna
- 🎨 Design clean com botão estilizado
- 🌐 Compatível com web, iOS e Android

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

### Para usar no celular:
- **Android**: [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play Store
- **iOS**: [Expo Go](https://apps.apple.com/app/expo-go/id982107779) na App Store

## 🚀 Como executar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/ulisses-damo/Trabalho-augusto.git
cd Trabalho-augusto
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute a aplicação

#### Para ver no navegador:
```bash
npm run web
```

#### Para ver no celular via Expo Go:
```bash
npx expo start
```

**Após executar `npx expo start`:**

1. **Um QR Code aparecerá no terminal**
2. **No Android**: Abra o app Expo Go e escaneie o QR Code
3. **No iOS**: Abra a câmera nativa e escaneie o QR Code (irá abrir no Expo Go)
4. **Alternativa**: Digite a URL exibida no terminal diretamente no Expo Go

#### Para emuladores (opcional):
```bash
# Android (requer Android Studio)
npm run android

# iOS (requer Xcode - apenas macOS)
npm run ios
```

## 📱 Testando no celular

### Passo a passo detalhado:

1. **Instale o Expo Go** no seu celular
2. **Certifique-se** que o celular e o computador estão na **mesma rede Wi-Fi**
3. **Execute** `npx expo start` no terminal
4. **Escaneie o QR Code** que aparece no terminal
5. **Aguarde** o app carregar no seu celular
6. **Teste** gerando imagens de gatos!

### Possíveis problemas:
- **QR Code não funciona**: Use a opção "Send link with email/SMS" no terminal
- **Conexão lenta**: Tente usar `npx expo start --tunnel`
- **Erro de rede**: Verifique se ambos dispositivos estão na mesma Wi-Fi

## 🔧 Scripts disponíveis

```bash
npm run web          # Abre no navegador
npm run android      # Abre no emulador Android
npm run ios          # Abre no simulador iOS
npm run build        # Gera build para produção
npx expo start       # Inicia servidor de desenvolvimento
```

## 🛠️ Tecnologias utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Linguagem de programação
- **Axios** - Requisições HTTP
- **TheCatAPI** - API para imagens de gatos

## 👨‍💻 Autor

**Ulisses Damo**

## 📄 Licença

Este projeto é para fins acadêmicos.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

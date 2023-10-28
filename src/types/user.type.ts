export interface User {
  uid: string // ID duy nhất của người dùng do Firebase cung cấp
  email: string // Email của người dùng
  displayName: string // Tên hiển thị của người dùng
  photoURL: string // URL của ảnh đại diện của người dùng
  providerId: string | null // ID của nhà cung cấp xác thực (ví dụ: 'google.com' hoặc 'github.com')
}

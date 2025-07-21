import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaSatisfaccionModule } from './models/encuesta-satisfaccion/encuesta-satisfaccion.module';
import { IncidenteModule } from './models/incidente/incidente.module';
import { LogSistemaModule } from './models/log-sistema/log-sistema.module';
import { ReporteUsoModule } from './models/reporte-uso/reporte-uso.module';
import { SoporteClienteModule } from './models/soporte-cliente/soporte-cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: false, // desactiva SSL explícitamente
      },
    }),
    EncuestaSatisfaccionModule,
    IncidenteModule,
    LogSistemaModule,
    ReporteUsoModule,
    SoporteClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

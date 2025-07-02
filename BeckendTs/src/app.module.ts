import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaSatisfaccionModule } from './models/encuesta-satisfaccion/encuesta-satisfaccion.module';
import { IncidenteModule } from './models/incidente/incidente.module';
import { LogSistemaModule } from './models/log-sistema/log-sistema.module';
import { ReporteUsoModule } from './models/reporte-uso/reporte-uso.module';
import { SoporteClienteModule } from './models/soporte-cliente/soporte-cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-us-east-2.pooler.supabase.com',
      port: 5432,
      username: 'postgres.rzsevfnnpelnfwdeyfgs',
      password: '4k3yMNj4OtciSHRE',
      database: 'postgres', // ← este es el nombre correcto
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // ← esto activa la conexión SSL
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
